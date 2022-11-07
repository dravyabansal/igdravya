import "../Styles/footer.css";

import GithubIco from '../../Media/github-icon.svg';
const Footer = () => {
    return (
        <footer>
            <div className="footer-left">Made with dravyabansal</div>
            <div className="footer-right">
                <a href="https://github.com/dravyabansal"  target="_blank" rel="noreferrer">
                    <img src={GithubIco} className="github-icon" alt="Github redirect"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
