package com.takima.backskeleton.services;

import com.takima.backskeleton.DAO.StatusDao;
import com.takima.backskeleton.models.Status;
import com.takima.backskeleton.models.Client;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class StatusService {
    private final StatusDao statusDao;
    public List<Status> findAll() {
        Iterable<Status> it = statusDao.findAll();
        List <Status> statuses = new ArrayList<>();
        it.forEach(statuses::add);
        return statuses;
    }

    public List<Client> getClientsOfStatus(Long id) {
        return statusDao.getAllClientFromStatus(id);
    }
}
