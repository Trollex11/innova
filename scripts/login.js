function loginWithDiscord() {
  const clientId = 'TWOJE_DISCORD_CLIENT_ID';
  const redirectUri = 'https://twojanazwa.github.io/discord-forms/create.html';
  const scope = 'identify';
  const url = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scope}`;
  window.location.href = url;
}
