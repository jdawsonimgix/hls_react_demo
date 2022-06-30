/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: 'Javascript',
    href: '#',

    imageUrl:
      'https://learnbatta.com/assets/images/javascript/javascript-logo.png',
    readingTime: '6 min',
  },
  {
    title: 'React',
    href: '#',

    imageUrl: 'https://patterns.dev/img/reactjs/react-logo@3x.svg',
    readingTime: '4 min',
  },
  {
    title: 'Vue.js',
    href: '#',

    imageUrl: 'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png',
    readingTime: '11 min',
  },
]

export default function TheFooter() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            See other categories in Javascript
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
