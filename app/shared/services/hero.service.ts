import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared';
import { HEROES } from './mock-heroes';


@Injectable()
export default class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
