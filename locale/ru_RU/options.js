RegisterLang();

lang_ru_RU =
{
	lngLanguage: "Язык",

	lngPreviewSize: "Размер картинки",
 	lngPreviewSmall: "Маленький",
	lngPreviewBig: "Большой",
  
	lngSave: "Сохранить",
	lngExit: "Выход"
}

	function RegisterLang()
{
  var ctrl = document.getElementById("language");

  ctrl.add(createOption("Russian", "ru_RU"));
}
