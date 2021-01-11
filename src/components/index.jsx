import React, { useContext, useEffect, useCallback } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import API, { graphqlOperation } from '@aws-amplify/api';

import { listLinkss } from '../graphql/queries';
import { updateLinks } from '../graphql/mutations';

import Logo from '../app-logo.png';

import ShowAlertList from './show-alert-list'

import { AuthContext } from '../contexts/auth-context'

import '../Main.css';



export default function Index() {

  const [loading, setLoading] = React.useState(true);
  const [saveLink] = React.useState(true);
  const [link] = React.useState({});
  const [allLinks, setAllLinks] = React.useState([]);



  const discountRef = React.useRef();

  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user.username) {
      setLoading(false)
    }
  }, [user])

  /* eslint-disable */
  console.log(chrome)
  /* eslint-enable */

  console.log(user)

  const fetchLinks = useCallback((cb = () => {} ) => {
    if (user.username) {
      // fetch data for current page
      const filter = {
        userId: {
          eq: user.username,
        },
      };

      // perform fetch and update link data in state
      API.graphql(
        graphqlOperation(listLinkss, {
          filter,
        })
      )
        .then(({ data }) => {
          const {
            listLinkss: { items },
          } = data;
          console.log(items);

          setAllLinks(items);
          cb()
        })
        .catch((error) => {
          console.error(error);
          cb()
        });
    }

  }, [user.username])

  React.useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  const updateLinkFn = (linkId, active) => {
    setLoading(true);

    API.graphql(
      graphqlOperation(updateLinks, {
        input: {
          id: linkId,
          active,
        },
      })
    )
      .then(() => {
        // update link status in link list
        fetchLinks(()=>{
          setLoading(false)
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  if (loading) {
    return (
      <div className="popup">
        <div className="loader-container flex-center">
          <div className="loader" />
        </div>
      </div>
    );
  }


  const filterAndSortLinks = (links) => {
    const activeLinks = links.filter((link) => link.active);
    const deactiveLinks = links.filter((link) => !link.active);

    const sortedActiveLinks = activeLinks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const sortedDeActiveLinks = deactiveLinks.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return sortedActiveLinks.concat(sortedDeActiveLinks);
  };


  return (
    <div className="App">
      <div className="popup">
        <div className="popup-header">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
            <p className="info-text-main">
              With Creamy you can set email alerts to <b>{user.attributes.email}</b> when
              the products you want go on sale.
            </p>
          </div>
          <AmplifySignOut />
        </div>
        <div className="container">
          <div className="form-part">
            {saveLink ? (
              <>
                <h2>
                  We will send you an email for any of these when the sale price is right for you
                </h2>
                <div className="form-inputs">
                  <div className="sqr-input">
                    <div className="text-input margin-bottom-zero">
                      <div className="sqr-input sqr-input-discount flex-center">
                        <div className="text-input flex-center">
                          <label htmlFor="phone">Discount</label>
                          <input
                            ref={discountRef}
                            type="number"
                            name="discount"
                            id="discount"
                            defaultValue="10"
                          />
                          <span id="percent">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>Links</h3>
              </>
            ) : (
                <div>
                  <p className="delete-text-main">
                    Creamy is watching this product for you and will email you at{' '}
                    {user.email} when your product goes on sale.
                </p>
                  <button
                    className="submit-button"
                    type="button"
                    onClick={() => updateLinkFn(link.id, false)}
                  >
                    Delete Alert
                </button>
                  <br />
                  <br />
                </div>
              )}
          </div>
        </div>
        <ShowAlertList
          updateLink={updateLinkFn}
          links={filterAndSortLinks(allLinks)}
          user={user}
        />
      </div>
    </div>

  );
}
