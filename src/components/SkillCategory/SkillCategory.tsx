type SkillCategoryProps = {
  title: string
  items: string[]
}

export default function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div className="c-skill-category">
      <h3 className="c-skill-category__title">
        {title}
      </h3>

      <ul className="c-skill-category__items">
        {items.map((item) => (
          <li
            key={item}
            className="c-skill-category__item"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
