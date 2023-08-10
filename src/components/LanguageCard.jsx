function LanguageCard({ language, title }) {
  return (
    <div className="list-card-language">
      <h4>{language}</h4>
      <h5>{title}</h5>
    </div>
  );
}

export default LanguageCard;
