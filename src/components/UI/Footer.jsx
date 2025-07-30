
import footerData from '../../api/footerApi.json'; // ✅ importing the JSON

export const Footer = () => {
  return (
    <footer className="footer">
      <h2>{footerData.company.name}</h2>
      <p>{footerData.company.tagline}</p>

      <div className="footer-links">
        {Object.entries(footerData.links).map(([key, value]) => (
          <a href={value} key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>

      <div className="footer-social">
        {footerData.social.map((item) => (
          <a href={item.url} key={item.platform}>
            <i className={`fab ${item.icon}`}></i> {item.platform}
          </a>
        ))}
      </div>

      <div className="footer-contact">
        <p>Email: {footerData.contact.email}</p>
      </div>

      <p>&copy; {footerData.company.year} {footerData.company.name}</p>
    </footer>
  );
};
