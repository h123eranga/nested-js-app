import { a, div, h1, span, attr, button, onclick, br } from "@capsular/nested-js"

function App() {

    function showAllert() {
        alert('Welcome to nested-js')
    }

    return div(
        h1('nested-js'),
        div('This is a nested-js application'),
        br(),
        button(
            'click',
            onclick(showAllert),
            attr({
                'style': 'width:120px;height:30px'
            })
        ),
        br(), br(),
        a(
            'Download',
            attr({
                'href': 'https://www.npmjs.com/package/@capsular/nested-js',
                'target': '_blank'
            })
        ),
        span(' the nested-js latest via npm'),
    )

}

export default App