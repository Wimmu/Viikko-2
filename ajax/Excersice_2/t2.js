async function postData() {
  const url = 'https://reqres.in/api/users';
  const data = {
    name: 'Pirkko Pekka',
    job: 'Software Engineer',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('There was a problem posting the data:', error);
  }
}

postData();
