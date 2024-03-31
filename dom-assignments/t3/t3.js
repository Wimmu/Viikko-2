const targetElement = document.getElementById('target');

function displayDeviceInfo() {
  const browserInfo = `${navigator.appName}, ${navigator.appVersion}`;

  const osInfo = navigator.platform;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const availableScreenWidth = window.screen.availWidth;
  const availableScreenHeight = window.screen.availHeight;

  const currentDate = new Date().toLocaleDateString('fi-FI', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('fi-FI', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const htmlContent = `
        <p>Browser name and version: ${browserInfo}</p>
        <p>Operating system name: ${osInfo}</p>
        <p>Screen width and height: ${screenWidth}px x ${screenHeight}px</p>
        <p>Available screen space for the browser: ${availableScreenWidth}px x ${availableScreenHeight}px</p>
        <p>Current date: ${currentDate}</p>
        <p>Current time: ${currentTime}</p>
    `;

  targetElement.innerHTML = htmlContent;
}

displayDeviceInfo();

window.addEventListener('resize', displayDeviceInfo);
