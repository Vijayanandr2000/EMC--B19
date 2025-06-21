import { FooterDatas } from "../../utils/constants/FooterDatas";

const Footer = () => {
  return (
    <footer>
      {FooterDatas.map((footer) => {
        return (
          <div>
            <h1>{footer.title}</h1>

            <ul>
              {footer.items.map((list, idx) => {
                return <li key={idx}>{list}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {/* <div>
        <h1>Community</h1>

        <ul>
          <li>Blogger Buzz</li>
        </ul>
      </div>
      <div>
        <h1>Developers</h1>

        <ul>
          <li>Blogger API </li>
          <li>Devloper Forum</li>
        </ul>
      </div> */}
    </footer>
  );
};

export default Footer;
