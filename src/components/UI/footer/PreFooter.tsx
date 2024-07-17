import React from 'react';

const PreFooter = () => {
    let styles: { [key: string]: string } = {
        backgroundImage: "radial-gradient(140% 107.13% at 50% 10%, transparent 37.41%, #63e 69.27%, #fff 100%)",
        height: "400px", // Увеличиваем высоту до 400 пикселей
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px", // Добавляем border-radius
        padding: "20px", // Добавляем отступы по краям на 20 пикселей
        position: "relative", // Добавляем позиционирование относительно для абсолютно позиционированных элементов
    };

    let lineStyles1: { [key: string]: string } = {
        bottom: "0",
        zIndex: "0",
        content: '""',
        width: "500px",
        height: "40px",
        position: "absolute",
        left: "calc(50% - 250px)",
        borderBottom: "1px solid",
        borderImageSource: "linear-gradient(90deg, transparent, rgba(143, 120, 255, .5) 50%, transparent)",
        borderImageSlice: "1",
        background: "radial-gradient(50% 100% at 50% 100%, rgba(157, 137, 255, .1) 0, rgba(1, 3, 20, 0) 100%)",
    };

    let lineStyles2: { [key: string]: string } = {
        top: "0",
        zIndex: "0",
        content: '""',
        width: "1000px",
        height: "80px",
        position: "absolute",
        left: "calc(50% - 500px)",
        borderTop: "1px solid",
        borderImageSource: "linear-gradient(90deg, transparent, rgba(143, 120, 255, .5) 50%, transparent)",
        borderImageSlice: "1",
        background: "radial-gradient(43.9% 100% at 50% 0, rgba(157, 137, 255, .15) 0, rgba(1, 3, 20, 0) 100%)",
    };

    return (
        <div style={{ padding: "20px", position: "relative" }}>
            <div style={styles}>
                <p style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Привет, мир!</p>
            </div>
            <div className="styles_divider__elk7j" style={lineStyles1}></div>
            <div className="styles_divider__elk7j" style={lineStyles2}></div>
        </div>
    );
};

export default PreFooter;
