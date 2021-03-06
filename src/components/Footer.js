import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import logo from "./images/logo_footer.svg";
// import send from "./images/send.png";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
// import twitter from "./images/twitter.svg";
// import youTube from "./images/youTube.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #151e11;

  .brand {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }

  .footergrid {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
  }

  .instagram,
  .facebook,
  .twitter,
  .you-tube {
    margin-right: 3.2rem;
  }

  .mailing {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  .list,
  .active {
    margin-bottom: 1.2rem;
  }

  .mail {
    background-color: #454b41;
    padding: 1.5rem;
    border-radius: 2rem;
    width: 25.5rem;
    outline: 0;
  }

  .footergridSmall {
    display: none;
  }

  input {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    .footergrid {
      display: none;
    }

    .footergridSmall {
      display: block;
    }

    .instagram,
    .facebook,
    .twitter,
    .you-tube {
      margin-right: 2.4rem;
    }
  }
`;

// const FormGroup = styled.form`
//   padding: 1rem 1.2rem;
//   width: 25.5rem;
//   border-radius: 0.8rem;
//   background-color: #ffffff20;

//   input {
//     background: transparent;
//     border: none;
//     color: #d9dbe1;

//     &:focus {
//       outline: none;
//     }
//   }

//   .icon {
//     height: 1.6rem;
//   }
// `;

const footer = () => {
  return (
    <Wrapper className="footerWrapper container" id="footer">
      <Spacer y={9.6} />
      <div className="footergrid colorWhite">
        <div>
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Spacer y={4} />
          <div className="brand">
            <h4>?? 2021 3pleozfitness.</h4>
            <Spacer y={0.2} />
            <h4>All rights reserved by 3PLEOZ ESSENTIALS LLC.</h4>
            <Spacer y={4} />
          </div>
          <div className="handles flexRow">
            <a
              href="https://www.facebook.com/3pleoz"
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <img src={facebook} alt="facebook" className="facebook" />
            </a>
            <a
              href="https://www.instagram.com/3pleozfitness/"
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="instagram" />
            </a>

            {/* <a href="/" target="_blank" rel="noreferer noopener">
              <img src={twitter} alt="twitter" className="twitter" />
            </a>
            <a href="/" target="_blank" rel="noreferer noopener">
              <img src={youTube} alt="you-tube" className="you-tube" />
            </a> */}
          </div>
          <Spacer y={8} />
        </div>
        <div className="border">
          <ul className="lists">
            <Link to="/">
              <li className="list">HOME</li>
            </Link>
            <a href="https://3pleozfitness.com/collections/all">
              <li className="list">SHOP</li>
            </a>
            <a href="https://3pleozfitness.com/collections/soccer-coaching-plans">
              <li className="list">SOCCER COACHING</li>
            </a>
            <a href="https://3pleozfitness.com/pages/contact">
              <li className="list">CONTACT US</li>
            </a>
          </ul>
          <Spacer y={9.6} />
        </div>
        {/* <div>
          <h1 className="mailing">
            Stay in the know by joining our mailing list.
          </h1>
          <Spacer y={2.4} />
          <FormGroup
            className="flexRow alignCenter justifySpaceBetween"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">
              <img src={send} alt="logo" className="icon" />
            </button>
          </FormGroup>
          <Spacer y={14} />
        </div> */}
      </div>

      <div className="footergridSmall colorWhite">
        <div>
          {/* <h1 className="mailing">
            Stay in the know by joining our mailing list.
          </h1>
          <Spacer y={2.4} />
          <FormGroup
            className="flexRow alignCenter justifySpaceBetween"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Your email address" required />
            <button type="submit">
              <img src={send} alt="logo" className="icon" />
            </button>
          </FormGroup> */}
          <Spacer y={4.8} />
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Spacer y={2.4} />
          <div className="border">
            <ul className="lists">
              <Link to="/">
                <li className="list">HOME</li>
              </Link>
              <a href="https://3pleozfitness.com/collections/all">
                <li className="list">SHOP</li>
              </a>
              <a href="https://3pleozfitness.com/collections/soccer-coaching-plans">
                <li className="list">SOCCER COACHING</li>
              </a>
              <a href="https://3pleozfitness.com/pages/contact">
                <li className="list">CONTACT US</li>
              </a>
            </ul>
            <Spacer y={4.8} />
          </div>
          <div className="brand">
            <h4>?? 2021 3pleozfitness.</h4>
            <Spacer y={0.2} />
            <h4>All rights reserved by 3PLEOZ ESSENTIALS LLC.</h4>
            <Spacer y={2} />
          </div>
          <div className="handlesSmall flexRow">
            <a
              href="https://www.facebook.com/3pleoz"
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <img src={facebook} alt="facebook" className="facebook" />
            </a>
            <a
              href="https://www.instagram.com/3pleozfitness/"
              target="_blank"
              rel="noreferer noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="instagram" />
            </a>
            {/* <a href="/" target="_blank" rel="noreferer noopener">
              <img src={twitter} alt="twitter" className="twitter" />
            </a>
            <a href="/" target="_blank" rel="noreferer noopener">
              <img src={youTube} alt="you-tube" className="you-tube" />
            </a> */}
          </div>
          <Spacer yMobile={4.8} />
        </div>
      </div>
    </Wrapper>
  );
};

export default footer;
