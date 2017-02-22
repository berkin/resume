export default ({ body, title }) => {
	return `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>${title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/styles.css" />
	 </head>
	<body>
		<div id="app">${body}</div>
	</body>
	<script src="/bundle.js"></script>
</html>
  `;
};
