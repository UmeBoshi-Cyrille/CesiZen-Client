import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseQueryService } from '@services/exercise/exercise-query.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Exercise } from '../../models/exercise/exercise';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent implements OnInit{
  private startingSeconds = 150;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  exercise: Exercise | undefined;

  // Signals for reactive state
  time = signal(0);
  overallTime = signal(this.formatTime(0));
  isRunning = signal(false);
  showGif = signal(false);

  constructor(
    private exerciseQueryService: ExerciseQueryService,
    private route: ActivatedRoute,
  ) {
    inject(DestroyRef).onDestroy(() => this.clearCountdown());
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.exerciseQueryService.getExercise(id).subscribe({
        next: (exercise) => {
          this.exercise = exercise;
          this.time.set(exercise.time);
          this.overallTime.set(this.formatTime(exercise.time));
        },
        error: (err) => console.error(err)
      });
    }
  }

  startCountdown() {
    if (this.isRunning()) return; // Prevent multiple intervals
    this.isRunning.set(true);
    this.showGif.set(true);
    this.intervalId = setInterval(() => {
      const current = this.time();
      if (current <= 0) {
        this.overallTime.set('00:00');
        this.clearCountdown();
      } else {
        this.time.set(current - 1);
        this.overallTime.set(this.formatTime(current - 1));
      }
    }, 1000);
  }

  private clearCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning.set(false);
    this.showGif.set(false);
    if (this.exercise) {
    this.time.set(this.exercise.time);
      this.overallTime.set(this.formatTime(this.exercise.time));
    }
  }

  private formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  get gifSrc(): string {
    if (!this.exercise) return '';
    switch (this.exercise.exerciseType) {
      case 1:
        return 'assets/static-images/exercise/breath-exercise(7-4-8).gif';
      case 2:
        return 'assets/static-images/exercise/breath-exercise(5-5).gif';
      case 3:
        return 'assets/static-images/exercise/breath-exercise(4-6).gif';
      default:
        return '';
    }
  }
}
