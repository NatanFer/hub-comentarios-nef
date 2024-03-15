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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


export{formatDate}
export{getRandomColor}

