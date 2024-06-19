import { Controller, Post, Body, Get, Param, Patch, Delete, Put } from '@nestjs/common';
import { TournamentService } from 'src/tournament/tournament.service';
import { CreateTournamentDto } from 'src/tournament/dto/createTournamentDTO';
import { UpdateTournamentDto } from 'src/tournament/dto/updateTournamentDTO';

@Controller('tournaments')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Post('new')
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentService.create(createTournamentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentService.update(+id, updateTournamentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentService.remove(+id);
  }
}
