package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Company;
import ch.zli.m223.punchclock.service.CompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Company> getAllEntries() {
        return companyService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Company createCompany(@Valid @RequestBody Company company) {
        company.getCid();
        return companyService.createCompany(company);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deleteCompany(@Valid @RequestBody Company company) {
        companyService.deleteCompany(company);
    }
}
