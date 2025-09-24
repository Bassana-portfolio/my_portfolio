import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  comments: number;
  title: string;
  excerpt: string;
  slug: string;
}

export default function ProjectComponent() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/images/image_1.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      excerpt: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "why-lead-generation-is-key"
    },
    {
      id: 2,
      image: "/images/image_2.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      excerpt: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "why-lead-generation-is-key"
    },
    {
      id: 3,
      image: "/images/image_3.jpg",
      date: "July 03, 2020",
      author: "Admin",
      comments: 3,
      title: "Why Lead Generation is Key for Business Growth",
      excerpt: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "why-lead-generation-is-key"
    }
  ];

  return (
    <section className="ftco-section bg-light" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Blog</span>
            <h2 className="mb-4">Our Blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row d-flex">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BlogPostProps {
  post: BlogPost;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="col-md-4 d-flex ftco-animate">
      <div className="blog-entry justify-content-end">
        <Link href={`/blog/${post.slug}`} className="block-20">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={250}
            style={{ objectFit: 'cover' }}
          />
        </Link>
        <div className="text mt-3 float-right d-block">
          <div className="d-flex align-items-center mb-3 meta">
            <p className="mb-0">
              <span className="mr-2">{post.date}</span>
              <Link href="#" className="mr-2">{post.author}</Link>
              <Link href="#" className="meta-chat">
                <span className="icon-chat"></span> {post.comments}
              </Link>
            </p>
          </div>
          <h3 className="heading">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          <p>{post.excerpt}</p>
        </div>
      </div>
    </div>
  );
}