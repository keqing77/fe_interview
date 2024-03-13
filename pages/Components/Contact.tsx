const Contact = () => {
  const socialLinks = [
    {
      name: "Me",
      url: "https://www.bento.me/keqing",
      icon: "/svg/apple.svg",
    },
    {
      name: "GitHub",
      url: "https://www.github.com/keqing77",
      icon: "/svg/github.svg",
    },
    {
      name: "Juejin",
      url: "https://juejin.cn/user/994371074524862",
      icon: "/svg/juejin.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lllavard",
      icon: "/svg/twitter.svg",
    },
  ];

  return (
    <section className="mt-4 flex justify-start gap-4">
      {socialLinks.map((link) => (
        <div className="block px-4">
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100 hover:bg-blue-200">
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              {link.url && (
                <img className="w-6 h-6" src={link.icon} alt={link.name} />
              )}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contact;
