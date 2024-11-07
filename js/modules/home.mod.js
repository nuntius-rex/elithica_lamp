
export default{
  template:`
    <div class="column">
        <h1>NOTE: This framework is still in development.</h1>
        <p>Elithica module.</p>
    </div>

    <style scoped>

    </style>
  `,
  init: function() {
    console.log("Home Init");

    const key = crypto.getRandomValues(new Uint8Array(32)); // Generate a random key
    const text = 'This is a secret message!';

    encrypt(text, key)
      .then(result => {
        console.log('Encrypted:', result.encrypted);
        console.log('IV:', result.iv);


          // Decrypting the message
          /*
          decrypt(result.encrypted, key, result.iv)
          .then(decryptedText => {
            console.log('Decrypted:', decryptedText);
          })
          .catch(error => console.error('Decryption error:', error));
          */
      })
      .catch(error => console.error('Encryption error:', error));

  }//end init
}



async function encrypt(text, key) {
  const encodedText = new TextEncoder().encode(text);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    encodedText
  );
  return {
    encrypted: new Uint8Array(encrypted),
    iv: iv
  };
}


async function decrypt(encrypted, key, iv) {
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key,
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  );
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    cryptoKey,
    encrypted
  );
  return new TextDecoder().decode(decrypted);
}
