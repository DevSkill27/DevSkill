import { SectionIntro } from './SectionIntro'

export function Demonstration() {
  return (
    <section id="demonstration" className="section-pad bg-paper">
      <div className="page-shell">
        <SectionIntro
          index="04"
          label="Demonstration"
          title={
            <>
              DevSkill,
              <br className="hidden sm:block" /> from traces to reusable guidance.
            </>
          }
          description="Watch the end-to-end system collect developer activity, distill practical experience into a Task Skill, and reuse that guidance in a new task."
        />

        <div className="mt-9 overflow-hidden rounded-xl border-2 border-blue-200 bg-blue-100 p-2 shadow-lg shadow-blue-900/10 sm:p-2.5">
          <video
            className="block h-auto w-full rounded-lg bg-[#102a56]"
            controls
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}media/devskill-poster.jpg`}
            aria-label="DevSkill end-to-end demonstration"
          >
            <source
              src={`${import.meta.env.BASE_URL}media/devskill.mp4`}
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </section>
  )
}
