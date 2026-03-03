import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'Horizon Private School',
    subtitle: 'Graduated High School',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'University of Toronto',
    subtitle: 'Started University Studies',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'Beaver Sealer',
    subtitle: 'Sales and Marketing',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Alfa Prime Concrete Supplies',
    subtitle: 'Operations Assistant',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'University of Toronto',
    subtitle: 'Software Developer (PyTA Contributor)',
    position: 'right',
  },
  {
    point: new THREE.Vector3(3, 3, -14),
    year: '2025',
    title: 'Uruk General Contracting',
    subtitle: 'Software Developer',
    position: 'right',
  }
]
