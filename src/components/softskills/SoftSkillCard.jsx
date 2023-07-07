function SoftSkillCard({imgSrc,title,description}) {
  return (
    <div className="soft-skill-card">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default SoftSkillCard