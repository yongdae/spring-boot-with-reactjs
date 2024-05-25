package com.example.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppPathsController {

  @GetMapping(value = {
      "",
      "/{path:[^.]*}",
      "/*/{path:[^.]*}",
      "/*/*/{path:[^.]*}",
      "/*/*/*/{path:[^.]*}"})
  public String redirect() {
    return "forward:/";
  }
}