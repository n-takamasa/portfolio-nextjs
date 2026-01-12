import SkillCategory  from "@/components/SkillCategory/SkillCategory";

export default function Skills() {
  return (
    <section className="p-skills">
      <h2 className="p-skills__title">
        Skills
      </h2>

      <div className="p-skills__list">
        <SkillCategory
          title="Markup"
          items={[
            'HTML',
            'CSS3（SCSS）',
            'BEM / FLOCSS',
          ]}
        />

        <SkillCategory
          title="Frontend"
          items={[
            'JavaScript（ES6+）',
            'jQuery',
            'React',
            'Next.js',
          ]}
        />

        <SkillCategory
          title="Tools / Others"
          items={[
            'Git / GitHub',
            'SourceTree',
            'Vercel',
            'Figma',
          ]}
        />
      </div>
    </section>
  )
}
