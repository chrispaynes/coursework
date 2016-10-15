# First Impressions With Elixir and Golang

## About
Contains additional code snippets for my presentation at the Elixir MN and Minneapolis Ultimate Golang meetups.

## Installation and Usage
 <b>Running Golang Code:</b><br>
 Visit the online [Go Playground]("https://play.golang.org/"") and paste the code within the sandbox, then click "run".


 <b>Running Elixir Code:</b><br>
 1. Visit the [Elixir-Lang installation page]("http://elixir-lang.org/getting-started/introduction.html#installation") and follow the installation steps.

 2. Enter ```$ iex ``` within a terminal to start the IEX shell.

 3. Write the code into the Interactive Elixir Shell.

 4. If your code requires a function call, you can save the code to an ".ex" elixir file and compile the file within the IEX Shell. Read the [Running Code: Elixir Crash Course]("http://elixir-lang.org/crash-course.html#elixir") for more details.

---
Paste Code into an Elixir file with an ".ex" extension:<br>
<i>Note: if you wish to declare a function with the IEX shell, you must define a module to store the function, otherwise you will return a ```cannot invoke def/1 outside module ``` error. The module starts after the ```defmodule bar do``` line and terminates at the final ```end``` statement.</i>

```elixir
iex(1)> defmodule Math do
...(1)>   def sum(a, b) do
...(1)>     a + b
...(1)>   end
...(1)> end
```

Within the same IEX shell, call a sum() function with the Math module.
```elixir
iex(2)> Math.sum(1, 2)
3
```
