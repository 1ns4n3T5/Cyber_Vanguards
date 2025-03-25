//supported-os
  // 1) Define an array for all your OS data

  const osData = [
    {
      name: "Fedora",
      versions: ["Fedora 37 x64", "Fedora 38 x64"],
      image: "../assets/img/cards/fedora.png"
    },
    {
      name: "Debian",
      versions: ["Debian 10 x64", "Debian 11 x64", "Debian 12 x64"],
      image: "../assets/img/cards/debian.png"
    },
    {
      name: "Ubuntu",
      versions: ["Ubuntu 20.04 LTS x64", "Ubuntu 22.04 LTS x64", "Ubuntu 23.04 x64"],
      image: "../assets/img/cards/ubuntu.png"
    },
    {
      name: "CentOS",
      versions: ["CentOS Stream 8 x64", "CentOS Stream 9 x64"],
      image: "../assets/img/cards/centos.png"
    }
  ];
  
  // 2) Function to build each card’s HTML
  function createCard(os) {
    return `
      <div class="col">
        <div class="card text-center p-3 h-100 shadow card-hover">
          <img src="${os.image}" alt="${os.name}" class="os-img">
          <div class="card-body">
            <h5 class="card-title text-black">${os.name}</h5>
            ${os.versions.map(version => `<p class="card-text text-black">${version}</p>`).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  // 3) Insert cards into the row
  const osCardsContainer = document.getElementById('os-cards');
  osData.forEach(os => {
    osCardsContainer.innerHTML += createCard(os);
  });


  //CMS

  // Data array for CMS VPS services
const cmsData = [
    {
      title: "WordPress VPS",
      content: "Ready-to-use WordPress CMS installed and configured on our cloud VPS by our professionals.",
      icon: "bi-pencil-square",
      iconColor: "text-primary"
    },
    {
      title: "Drupal VPS",
      content: "Ready-to-use Drupal CMS installed and configured on our cloud VPS by our professionals.",
      icon: "bi-droplet",
      iconColor: "text-danger"
    },
    {
      title: "Joomla VPS",
      content: "Ready-to-use Joomla CMS installed and configured on our cloud VPS by our professionals.",
      icon: "bi-window",
      iconColor: "text-warning"
    }
  ];
  
  // Function to create a CMS card's HTML
  function createCMSCard(item) {
    return `
      <div class="col gy-5">
        <div class="card text-center p-3 h-100 shadow card-hover">
          <div class="icon-circle">
            <i class="bi ${item.icon} ${item.iconColor} fs-1"></i>
          </div>
          <div class="card-body">
            <h5 class="card-title text-black">${item.title}</h5>
            <p class="card-text text-black">${item.content}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Insert CMS cards into the container
  const cmsCardsContainer = document.getElementById('cms-cards');
  cmsData.forEach(item => {
    cmsCardsContainer.innerHTML += createCMSCard(item);
  });
  