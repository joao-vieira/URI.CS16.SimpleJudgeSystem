function refreshEditor( _idLanguage ) {
    $.ajax({
        url: window.location.href +  "/" + _idLanguage + "/get-language",
        success: function(response){
            var linguagem = response.response;
            renderLanguageTemplate(linguagem);
        }
    });
}


function renderLanguageTemplate(linguagem) {
    editor.setValue("");
    var newTemplate = linguagem.template.replace(/<br>/g, '\n');

    switch (linguagem.nome) {
        case "Python":
            var PythonMode = ace.require("ace/mode/python").Mode;
            editor.session.setMode(new PythonMode());
            editor.insert(newTemplate);

            break;
        case "Java":
            var JavaMode = ace.require("ace/mode/java").Mode;
            editor.session.setMode(new JavaMode());
            editor.insert(newTemplate);

            break;
        default: // C++
            var CppMode = ace.require("ace/mode/c_cpp").Mode;
            editor.session.setMode(new CppMode());
            editor.insert(newTemplate);

            break;
    }
}
