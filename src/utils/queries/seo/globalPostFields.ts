// Query partial: retrieve global post fields.
const globalPostFields = `
	databaseId
	date
	slug
	uri
	title
	status
	content
  	template {
		templateName
	}
`;
export default globalPostFields;
