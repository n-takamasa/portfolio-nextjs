import WorkItem from "@/components/WorkItem/WorkItem";

export default function Works() {
  return (
    <section className="p-works">
      <h2 className="p-works__title">
        Works
      </h2>

      <div className="p-works__list">
        <WorkItem
          title="制作会社のWebサイト制作"
          description="制作会社より依頼を受け、デザインデータをもとにコーディングおよびフロントエンド実装を担当。"
          tech={[
            'HTML',
            'CSS（SCSS）',
            'JavaScript',
          ]}
        />
      </div>
    </section>
  )
}
