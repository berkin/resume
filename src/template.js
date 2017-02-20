export default ({ body, title }) => {
  return `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>${title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="/assets/index.css" />
	 </head>
	<body>
		<div id="app">${body}</div>
	</body>
	<script src="/assets/bundle.js"></script>
</html>
  `;
};
