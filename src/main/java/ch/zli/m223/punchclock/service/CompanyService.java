package ch.zli.m223.punchclock.service;


import ch.zli.m223.punchclock.domain.Company;
import ch.zli.m223.punchclock.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {
    private CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    public Company createCompany(Company company) {
        return companyRepository.saveAndFlush(company);
    }

    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    public void deleteCompany(Company company) {
        companyRepository.deleteById(company.getCid());
    }

    public void updateCompany(Company company) {
        companyRepository.save(company);
    }
}
