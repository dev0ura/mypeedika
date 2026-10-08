import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

/* Shared shell for the about and policy pages: the blog article's header
   and prose styles, without the sidebar or closing call to action. */
export default function PolicyPage({
  title,
  lead,
  updated,
  children,
}: {
  title: string;
  lead: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <header style={{ paddingBlock: "56px 40px" }}>
            <div className="container">
              {updated && (
                <p className="micro" style={{ marginBlockEnd: 24 }}>
                  Last updated {updated}
                </p>
              )}
              <h1
                style={{
                  fontSize: "clamp(34px, 5.4vw, 68px)",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.98,
                  maxInlineSize: "20ch",
                  marginBlockEnd: 24,
                }}
              >
                {title}
              </h1>
              <p className="t-lead" style={{ maxInlineSize: "58ch" }}>
                {lead}
              </p>
            </div>
          </header>

          <div className="container" style={{ paddingBlockEnd: 96 }}>
            <div className="article-body" style={{ maxInlineSize: "68ch" }}>
              {children}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
