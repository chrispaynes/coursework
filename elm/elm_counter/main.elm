import Html exposing (..)
import Html.App as App
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (..)
import Json.Encode exposing (string)
import String

-- Model defines the application's model.
type alias Model =
  Float

model : Model
model = 0
--prevModel : Model
prevModel = 0

 --Msg is a union type storing various mathematical functions.
type Msg
  = Increment | Decrement | Divide | Multiply | Modulus 
    | Zero | One | Two | Three | Four | Five | Six | Seven | Eight | Nine
    | Clear

-- Update updates a model based on msg.
update : Msg -> Model -> Model
-- Update accepts msg and model variable and returns a calculation.
update msg model =
    case msg of
      Zero -> 0
      One -> 1
      Two -> 2
      Three -> 3
      Four -> 4
      Five -> 5
      Six -> 6
      Seven -> 7
      Eight -> 8
      Nine -> 9
      Clear -> 0
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
    [ div [ calcOutput ] [text (Basics.toString prevModel) ]
    , input [ placeholder (Basics.toString model), type' "number" ] []
    , div [] [ button [ class "btn btn-default", onClick One ] [ text "- / +" ]
            , button [ class "btn btn-default", onClick Seven ] [ text "7" ]
            , button [ class "btn btn-default", onClick Eight ] [ text "8" ]
            , button [ class "btn btn-default", onClick Nine ] [ text "9" ]
            , button [ class "btn btn-default" ] [ text "/" ]
            ]
    , div [] [ button [ class "btn btn-default" ] [ text "CE" ]
            , button [ class "btn btn-default", onClick Four ] [ text "4" ]
            , button [ class "btn btn-default", onClick Five ] [ text "5" ]
            , button [ class "btn btn-default", onClick Six ] [ text "6" ]
            , button [ class "btn btn-default" ] [ text "*" ]
            ]
    , div [] [ button [ class "btn btn-default"] [ text "ON" ]
            , button [ class "btn btn-default", onClick One] [ text "1" ]
            , button [ class "btn btn-default", onClick Two] [ text "2" ]
            , button [ class "btn btn-default", onClick Three] [ text "3" ]
            , button [ class "btn btn-default"] [ text "-" ]
            ]
    , div [] [ button [ class "btn btn-default turnOff"] [ text "OFF" ]
            , button [ class "btn btn-default", onClick Zero] [ text "0" ]
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
  { model = model
  , view = view
  , update = update
  }

