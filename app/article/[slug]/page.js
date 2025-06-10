import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { slides } from "@/data/slides";

export async function generateStaticParams() {
  return slides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const article = slides.find((s) => s.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    openGraph: { images: [{ url: article.background }] },
  };
}

export default function ArticlePage({ params }) {
  const article = slides.find((s) => s.slug === params.slug);
  if (!article) return notFound();

  const {
    titleClass = "font-serif text-4xl md:text-5xl font-semibold",
    descriptionClass = "mt-3 max-w-2xl text-lg text-slate-400",
    contentClass = "prose lg:prose-lg prose-slate",
  } = article;

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Hero */}
      <header className="relative h-80 md:h-96 w-full">
        <Image
          src={article.background}
          alt={article.title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className={`${titleClass} text-white drop-shadow-sm`}>
            {article.title}
          </h1>
          <p className={`${descriptionClass} text-white`}>
            {article.description}
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto w-full container grow px-6 py-12">
        <div
          className={`${contentClass} leading-relaxed [&>*]:tracking-normal prose-headings:font-semibold`}
        >
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
