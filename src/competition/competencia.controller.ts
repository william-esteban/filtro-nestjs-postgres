import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CompetitionService } from 'src/competition/competencia.service';
import { CreateCompetitionDto } from 'src/competition/dto/createCompetitionDTO';
import { UpdateCompetitionDto } from 'src/competition/dto/updateCompetitionDTO';

@Controller('competitions')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService) {}

  @Post()
  create(@Body() createCompetitionDto: CreateCompetitionDto) {
    return this.competitionService.create(createCompetitionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompetitionDto: UpdateCompetitionDto) {
    return this.competitionService.update(+id, updateCompetitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionService.remove(+id);
  }
}
