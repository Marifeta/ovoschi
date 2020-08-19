import React, { useState } from 'react';

export default function Image({img}) {

  const [pathToStub, setPathToStub] = useState('');

  async function getImage() {
    const domain = window.location.origin;
    let fetchURL = `${domain}${img}`;
    console.log(fetchURL);

    await fetch(fetchURL)
      .then(
        () => {
          setPathToStub(img);
        }
      )
      .catch(() => {
        setPathToStub('/assets/stub.jpg');
      });
  }
  getImage();
  return (
    <>
      <img className="img" src={pathToStub} alt="ovosch"/>

      <style jsx>{`
        .img {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        @media (min-width: 874px) {
          .img {
            max-width: 600px;
          }
        }
        @media (max-width: 873px) {
          .img {
            margin-bottom: 18px;
          }
        }

      `}</style>
    </>
  )
}
