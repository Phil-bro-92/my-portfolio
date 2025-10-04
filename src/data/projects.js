import portfolioImg from "../assets/images/portfolio.webp";
import dvdImg from "../assets/images/dvd.webp";
import budgetImg from "../assets/images/budget.webp";
import countryImg from "../assets/images/countries.webp";

export const projects = [
    {
        title: "Portfolio Website",
        description:
            "A modern portfolio built with React, Tailwind, and Framer Motion.",
        image: portfolioImg,
        tags: ["React", "TailwindCSS", "Framer Motion"],
        link: "https://phil-bro-92.github.io/my-portfolio/"
    },
    {
        title: "DVD Rental",
        description: "Management software for a DVD rental store",
        image: dvdImg,
        tags: ["React", "SCSS", "Node", "NPM", "PostgreSQL"],
        link: "https://github.com/Phil-bro-92/dvd-rental-fe"
    },
    {
        title: "Budget Calculator",
        description:
            "A web-based budget calculator that allows users to register, log in, input budget details, view tables and graphical representations of their budgets, and update their user information.",
        image: budgetImg,
        tags: ["React", "SCSS", "Node", "NPM", "PostgreSQL"],
        link: "https://github.com/Phil-bro-92/budget-calculator-fe"
    },
    {
        title: "Country Explorer",
        description:
            "A web application that allows users to view detailed information about countries and log their visits, providing both informational and interactive features.",
        image: countryImg,
        tags: ["React", "SCSS", "Node", "NPM", "PostgreSQL"],
        link: "https://github.com/Phil-bro-92/countries-fe"
    }
];
