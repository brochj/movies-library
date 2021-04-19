import { HOME_OG_IMAGE_URL, BLOG_NAME  } from '../../lib/constants'

export default function MovieJSONLD(props){
  const {
    title,
    postUrl,
    description,
    image,
    datePublished,
    dateModified
  } = props

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: title,
    description: description,
    image: image,  
    author: {
      "@type": "Person",
      name: BLOG_NAME
    },  
    "publisher": {
      "@type": "Organization",
      name: BLOG_NAME,
      logo: {
        "@type": "ImageObject",
        url: HOME_OG_IMAGE_URL
      }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    inLanguage: "pt-BR",
    }

  return (
    <script
      type="application/ld+json" key="application/ld+json">
      {JSON.stringify(ldJson)}
    </script>
  )
}