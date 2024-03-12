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
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <img className="w-6 h-6" src={link.icon} alt={link.name} />
          </a>
        </div>
      ))}
    </section>
  );
};

export default Contact;
