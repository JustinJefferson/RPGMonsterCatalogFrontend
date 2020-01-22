import { Monster } from './monster';

export const MONSTERS: Monster[] = [
    {
        monsterId: 0,
        monsterName: 'Hatchly',
        description: 'A duck monster',
        familyId: 5,
        hp: 150,
        sp: 150,
        atk: 20,
        def: 30,
        strength: 20,
        dexterity: 20,
        intelligence: 30,
        agility: 10,
        luck: 30,
        preEvolutionId: null
    },
    {
        monsterId: 1,
        monsterName: 'Swanda',
        description: 'A swan monster',
        familyId: 5,
        hp: 200,
        sp: 250,
        atk: 30,
        def: 40,
        strength: 30,
        dexterity: 30,
        intelligence: 50,
        agility: 20,
        luck: 40,
        preEvolutionId: 1
    },
]