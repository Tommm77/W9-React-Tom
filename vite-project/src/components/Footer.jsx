import '../styles/Footer.css';

const Footer = () => {
    const numero = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com/";

    return (
        <footer>
            <p>Numéro de contact: {numero}</p>
            <p>Notre site: <a href={site} target="_blank" rel="noopener noreferrer">{site}</a></p>
            <p>All right reserved</p>
            <p>©2023 Mon Blog</p>
        </footer>
    );
};

export default Footer;