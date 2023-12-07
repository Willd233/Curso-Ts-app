export const RandomFox = (): JSX.Element => {
    const randomImageNumber =
        Math.floor(Math.random() * 123) + 1;

    const image =
        `https://randomfox.ca/images/${randomImageNumber}.jpg`;
    return <img width={300} height="auto"
        src={image} alt="Random Fox" />;
};
