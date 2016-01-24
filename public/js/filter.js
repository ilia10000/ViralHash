function filter_text( name, text ) {

	text = text.toUpperCase();

	name = name.toUpperCase();

	var index = text.indexOf( name );

	text = text.substr(0, index) + text.substr(index + name.length, text.length);

	text = text.trim().substr(0, 1);

	return text;
}