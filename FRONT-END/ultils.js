const formatDate = (data) => {
    const currentDate = new Date(data);
    const options = {
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formattedDate = currentDate.toLocaleDateString('pt-BR', options)
    return formattedDate.replace(',', ' às') + 'hs';
}


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const radomColors = (colors) => {
    const index = getRandomInt(colors.length);
    return colors[index]
}

function darkColors() {
    let darkPallete = ['000000', '191970', '4682B4', '800000', '8B4513', '556B2F', '006400']
    return radomColors(darkPallete)
}

function lightColors() {
    let lightColor = ['98FB98', '00FFFF', '00BFFF', '836FFF', 'DCDCDC', 'ADD8E6', 'FF00FF']
    return radomColors(lightColor)
}


export { formatDate, darkColors, lightColors }

