let modalAppear = () => {
    document.getElementById('modal').style.transform = 'scale(1)';
    document.getElementById('overlay').style.display = 'initial';
  
  }
  let closeModal = () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.transform = 'scale(0)';
  }
  