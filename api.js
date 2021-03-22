axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAHefVFzh4p3toZCGD6QIBG5b7hZAutEx3dWl7MjxPEZBzC2LoLIyK5YMaZAPBgXwUnKRTVfon2mpRDZC1yjDeOYv54hLzkYqRQHlOVNeJxkezxS4t2SMzlESz30F3ZBoTMhq4wLGFOSuPdu3ZAcsnLrMi4ytxo006iMRMTEtYCh')
        .then(response => {
            var output = "";
            output 
             +="<br>Bài số 1:</br>"
             + response.data.data[0].message + "<br><br>Bài số 2:</br>" 
             + response.data.data[1].message + "<br><br>Bài số 3:</br>" 
             + response.data.data[2].message;
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error))