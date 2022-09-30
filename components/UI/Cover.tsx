import React from 'react';
import { Button } from "react-bootstrap";
import Image from "next/image"

interface Props {
  name: string,
  coverImg: string,
  connect: Function,
}

const Cover:React.FC<Props> = ({ name, coverImg, connect }) => {
  if (name) {
    return (
      <div
          className="d-flex justify-content-center flex-column text-center "
          style={{ background: "#282c34", minHeight: "100vh" }}
        >
          <div className="mt-auto text-light mb-5">
            <div
              className=" ratio ratio-1x1 mx-auto mb-2"
              style={{ maxWidth: "320px" }}
            >
              <Image src={coverImg} alt="" layout={"fill"}/>
            </div>
            <h1>{name}</h1>
            <p>Please connect your wallet to continue.</p>
            <Button
              onClick={() => connect().catch((e: Error) => console.log(e))}
              variant="outline-light"
              className="rounded-pill px-3 mt-3"
            >
              Connect Wallet
            </Button>
          </div>

          <p className="mt-auto text-secondary">Powered by Celo</p>
        </div>
    );
  }

  return null;
};

export default Cover;
