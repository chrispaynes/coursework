import Bootstrap.Html exposing (..)
import Html exposing (..)
import Html.App as App
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (..)
import Json.Encode exposing (string)
import String

-- Model defines the application's model.
type alias Model =
  Float

-- Msg is a union type storing various mathematical functions.
type Msg
  = Increment | Decrement | Divide | Multiply | Modulus

-- Update updates a model based on msg.
update : Msg -> Model -> Model
-- Update accepts msg and model variable and returns a calculation.
update msg model =
    case msg of
      Increment -> model + 1
      Decrement -> model - 1
      Divide ->   model / 2
      Multiply -> model * 2
      Modulus -> Basics.toFloat(model % 2)

-- CalcOutput stores the CSS style for the calculator output.
calcOutput : Attribute msg
calcOutput =
  style
    [ ("color", "lightgray")
    , ("width", "50px")
    , ("fontSize", "24px")
    ]

-- Model defines the application state.
view : Model -> Html Msg
view model =
  div []
    [ div [ calcOutput ] [text (Basics.toString model) ]
    , input [ placeholder (Basics.toString model), type' "number" ] []
    , div [] [ button [ class "btn btn-default"] [ text "+ / -" ]
            , button [ class "btn btn-default"] [ text "7" ]
            , button [ class "btn btn-default"] [ text "8" ]
            , button [ class "btn btn-default"] [ text "9" ]
            , button [ class "btn btn-default"] [ text "/" ]
            ]
    , div [] [ button [ class "btn btn-default"] [ text "CE" ]
            , button [ class "btn btn-default"] [ text "4" ]
            , button [ class "btn btn-default"] [ text "5" ]
            , button [ class "btn btn-default"] [ text "6" ]
            , button [ class "btn btn-default"] [ text "X" ]
            ]
    , div [] [ button [ class "btn btn-default"] [ text "ON" ]
            , button [ class "btn btn-default"] [ text "1" ]
            , button [ class "btn btn-default"] [ text "2" ]
            , button [ class "btn btn-default"] [ text "3" ]
            , button [ class "btn btn-default"] [ text "-" ]
            ]
    , div [] [ button [ class "btn btn-default"] [ text "OFF" ]
            , button [ class "btn btn-default"] [ text "0" ]
            , button [ class "btn btn-default"] [ text "." ]
            , button [ class "btn btn-default"] [ text "=" ]
            , button [ class "btn btn-default"] [ text "+" ]
            ]
    , div [] [ button [ class "btn btn-danger", onClick Decrement ] [ text "-" ]
            , button [ class "btn btn-success", onClick Increment ] [ text "+" ]
            , button [ class "btn btn-success", onClick Divide ] [ text "/ 2" ]
            , button [ class "btn btn-success", onClick Multiply ] [ text "* 2" ]
            , button [ class "btn btn-success", onClick Modulus ] [ text "% 2" ]
            ]
    ]

-- Main stores the App.
main =
  App.beginnerProgram
  { model = 0
  , view = view
  , update = update
  }

